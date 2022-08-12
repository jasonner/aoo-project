import plupload from "plupload";


var accessid = "";
var accesskey = "";
var host = "";
var policyBase64 = "";
var signature = "";
var callbackbody = "";
var filename = "";
var key = "";
var expire = 0;
var g_object_name = "";
var g_object_name_type = "random_name",
  timestamp;
var now = (timestamp = Date.parse(new Date()) / 1000);

function send_request() {
  var xmlhttp = null;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xmlhttp != null) {
    var serverUrl = "/forhoo/GetOSSUploadVideoPolicyToken?dir=qtest";
    xmlhttp.open("GET", serverUrl, false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
  } else {
    alert("Your browser does not support XMLHTTP.");
  }
}

function check_object_radio() {
  var tt = document.getElementsByName("myradio");
  for (var i = 0; i < tt.length; i++) {
    if (tt[i].checked) {
      g_object_name_type = tt[i].value;
      break;
    }
  }
}

function get_signature() {
  //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
  now = timestamp = Date.parse(new Date()) / 1000;
  if (expire < now + 3) {
    var body = send_request();
    var obj = eval("(" + body + ")");
    host = obj["host"];
    policyBase64 = obj["policy"];
    accessid = obj["accessid"];
    signature = obj["signature"];
    expire = parseInt(obj["expire"]);
    callbackbody = obj["callback"];
    key = obj["dir"];
    return true;
  }
  return false;
}

function random_string(len) {
  len = len || 32;
  var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var maxPos = chars.length;
  var pwd = "";
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function get_suffix(filename) {
  var pos = filename.lastIndexOf(".");
  var suffix = "";
  if (pos != -1) {
    suffix = filename.substring(pos);
  }
  return suffix;
}

function calculate_object_name(filename) {
  if (g_object_name_type == "local_name") {
    g_object_name += "${filename}";
  } else if (g_object_name_type == "random_name") {
    var suffix = get_suffix(filename);
    g_object_name = key + random_string(10) + suffix;
  }
  return "";
}

function get_uploaded_object_name(filename) {
  if (g_object_name_type == "local_name") {
    var tmp_name = g_object_name;
    tmp_name = tmp_name.replace("${filename}", filename);
    return tmp_name;
  } else if (g_object_name_type == "random_name") {
    return g_object_name;
  }
}

function set_upload_param(up, filename, ret) {
  if (ret == false) {
    ret = get_signature();
  }
  g_object_name = key;
  if (filename != "") {
    var suffix = get_suffix(filename);
    calculate_object_name(filename);
  }
  var new_multipart_params = {
    key: g_object_name,
    policy: policyBase64,
    OSSAccessKeyId: accessid,
    success_action_status: "200", //让服务端返回200,不然，默认会返回204
    callback: callbackbody,
    signature: signature,
  };

  up.setOption({
    url: host,
    multipart_params: new_multipart_params,
  });

  up.start();
}

export default function (onUploadSuccess) {
  var uploader = new plupload.Uploader({
    runtimes: "html5",
    browse_button: "selectfiles",
    //multi_selection: false,
    container: document.getElementById("headshotUpdate"),
    flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
    silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
    url: "http://oss.aliyuncs.com",
    max_retries: 0,
    filters: {
      max_file_size: "500mb",
      mime_types: [{ title: "files type", extensions: "*", extensions2: "*" }],
    },

    init: {
      PostInit: function () {

        document.getElementById("ossfile").innerHTML = "";
        var a = 1;
        document.getElementById("postfiles").onclick = function () {
          if ($("#ossfile").html() === "") {
            alert("请选择照片或视频");
            return false;
          }
          if (a) {
            a = 0;
            
            set_upload_param(uploader, "", false);
            return false;
          }
        };
      },

      FilesAdded: function (up, files) {
        console.log(files[0]);
        var file = files[0];
        if (file.type.indexOf("image") !== -1) {
          var fileReader = new FileReader();
          fileReader.onload = function (e) {
            console.log(e.target.result)
            $("#preview").html('<img src="' + e.target.result + '"/>');
          };
          fileReader.readAsDataURL(files[0].getNative());
        } else {
          var fileReader = new FileReader();
          fileReader.onload = function (e) {
            console.log(e.target.result)
            $("#preview").html('<video src="' + e.target.result + '" ref="video" webkit-playsinline playsinline  x-webkit-airplay="true" x5-video-player-type="h5" x5-video-orientation="h5" x5-video-player-fullscreen="true" preload="auto" controls/>');

          };
          fileReader.readAsDataURL(files[0].getNative());
          // $("#ossfile").css("display", "block");
        }
        var fileCount = up.files.length,
          ids = $.map(up.files, function (item) {
            return item.id;
          });

        for (var i = 0; i < fileCount - 1; i++) {
          uploader.removeFile(uploader.getFile(ids[i]));
        }
        plupload.each(up.files, function (file) {
          document.getElementById("ossfile").innerHTML =
            '<div id="' +
            file.id +
            '">' +
            file.name +
            " (" +
            plupload.formatSize(file.size) +
            ")" +
            '<div class="progress"><div class="progress-bar" style="width: 0%"><b class="num"></b></div></div>' +
            "</div>";
        });
        $("#console").html("");

        var a = 1;
        if (a) {
          a = 0;
          set_upload_param(uploader, "", false);
          return false;
        }
      },

      BeforeUpload: function (up, file) {
        check_object_radio();
        set_upload_param(up, file.name, true);
      },

      UploadProgress: function (up, file) {
        console.log(file.percent);
        try {
          var d = document.getElementById(file.id);
          //alert(file.percent);
          d.getElementsByTagName("b")[0].innerHTML =
            "<span>" + file.percent + "%</span>";
          var prog = d.getElementsByTagName("div")[0];
          var progBar = prog.getElementsByTagName("div")[0];
          progBar.style.width = file.percent + "%";
          progBar.setAttribute("aria-valuenow", file.percent);
        } catch (err) {
          alert(err.message);
        }
      },

      FileUploaded: function (up, file, info) {
        if (info.status === 200) {
          onUploadSuccess(get_uploaded_object_name(file.name));
        } else {
          document
            .getElementById(file.id)
            .getElementsByTagName("b")[0].innerHTML = info.response;
        }
      },
      Error: function (up, err) {
        if (err.code === -600) {
          document
            .getElementById("console")
            .appendChild(document.createTextNode("\n选择的文件太大了"));
        } else if (err.code === -601) {
          document
            .getElementById("console")
            .appendChild(document.createTextNode("\n选择的文件后缀不对"));
        } else if (err.code === -602) {
          document
            .getElementById("console")
            .appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
        } else {
          document
            .getElementById("console")
            .appendChild(
              document.createTextNode("\n您的网络好像不太给力，请稍后重试")
            );
        }
      },
    },
  });
  uploader.init();
}
