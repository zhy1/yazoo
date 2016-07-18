/**
 * Created by fermi on 2016/2/11.
 * SerializeFileSystem
 */
import fs from'fs';
import q from'q';
//import path from'path';
//import cache from './cache/cache';

const DATA_PATH = "/data/data.info";

const setPathData = (pt, w_data = "") => {
    let dataPath = process.cwd() + ( pt || DATA_PATH );
    let deferred = q.defer();
    fs.writeFile(dataPath, w_data, null, function (err) {
        if (err) {
            deferred.reject(error.toString().red);
        }
        deferred.resolve('overwrite success');
    });
    return deferred.promise;
}

const dataDir = () => {
    let dataPath = process.cwd() + DATA_PATH;
    console.info("dataPath = " + dataPath);
    console.info("__dirname = " + __dirname);
}

const attachPathData = (pt = DATA_PATH, w_data = "") => {
    let dataPath = process.cwd() + pt;
    fs.appendFile(dataPath, w_data, function () {
        console.log("向" + dataPath + '追加内容完成');
    });
}

const writeFile = (pt = DATA_PATH, w_data = "") => {
    let dataPath = process.cwd() + pt;
    fs.writeFile(dataPath, w_data, function (i) {
        console.log("向" + dataPath + '覆盖内容完成');
    });
}

const getPathData = (pt = DATA_PATH) => {
    let dataPath = process.cwd() + pt;
    let deferred = q.defer();
    fs.readFile(dataPath, 'utf-8', function (err, data) {
        if (err) {
            deferred.reject(err.toString());
        }
        deferred.resolve(data);
    })
    return deferred.promise;
}

const getPathDataBuffer = dataPath => {
    fs.open(dataPath, 'r', function (err, fd) {
        if (err) {
            console.error(err);
            return;
        } else {
            let buffer = new Buffer(255);
            console.log(buffer.length);
            //每一个汉字utf8编码是3个字节，英文是1个字节
            fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
                if (err) {
                    throw err;
                } else {
                    console.log(bytesRead);
                    console.log(buffer.slice(0, bytesRead).toString());
                    //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
                    fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
                        console.log(bytesRead);
                        console.log(buffer.slice(0, bytesRead).toString());
                        return buffer.slice(0, bytesRead).toString();
                    });
                }
            });
        }
    });
}

const showProcess = () => {
    console.log("process        " + process);
    console.log("process.cwd        " + process.cwd());
    console.log("process.argv       " + process.argv);
    console.log("process.argv       " + process.argv[0]);
    console.log("process.argv       " + process.argv[1]);
    console.log("process.execPath       " + process.execPath);
    console.log("process.env        " + process.env.JAVA_HOME);
    console.log("process.versions       " + process.versions.node);
    console.log("process.versions       " + process.versions.v8);
    console.log("process.versions       " + process.version);
    console.log("process.memoryUsage()内存:" + process.memoryUsage());
    return process.cwd();
}

const mkdir = path => {
    fs.mkdir(process.cwd() + path, 777, err=> {
        if (err)console.log(err);
        else console.log("creat done!");
    })
}


const scanFolder = path => {
    const fileList = [], folderList = [],
        walk = (path, fileList, folderList)=> {
            files = fs.readdirSync(path);
            files.forEach(function (item) {
                let tmpPath = path + '/' + item,
                    stats = fs.statSync(tmpPath);

                if (stats.isDirectory()) {
                    walk(tmpPath, fileList, folderList);
                    folderList.push(tmpPath);
                } else {
                    fileList.push(tmpPath);
                }
            });
        };

    walk(path, fileList, folderList);
    console.log('扫描' + path + '成功');
    return {
        'files': fileList,
        'folders': folderList
    }
}

// 覆盖写入文件并把记录保存到cache.map响应的值为1
const writeCurrentCache = (pt = "", w_data = "") => {
    let dataPath = process.cwd() + pt;
    fs.writeFile(dataPath, w_data, function (err) {
        if (err)return
        let fileurlsplit = dataPath.split("/");
        let filename = fileurlsplit[fileurlsplit.length - 1].split(".")[0];
        cache.cache[filename] = 1;
        console.info("cache: " + JSON.stringify(cache.cache));
        status = 1;
        console.log(cache.cache);
    });
}


const readFileAsJSObjectNative = (path = "") => {
    const content = fs.readFileSync(path, {encoding: 'utf-8'});
    return {
        js: JSON.parse(content),
        content: content
    }
}

export default {
    setPathData,
    showProcess,
    dataDir,
    attachPathData,
    getPathData,
    scanFolder,
    writeFile,
    mkdir,
    writeCurrentCache,
    readFileAsJSObjectNative
};