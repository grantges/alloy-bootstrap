function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap/" + s : s.substring(0, index) + "/co.grantges.bootstrap/" + s.substring(index + 1);
    return path;
}

module.exports = [];