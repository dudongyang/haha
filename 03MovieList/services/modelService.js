(function(){
    var mlModel = angular.module("ml.model",['ml.services.jsonp']);
    mlModel.factory('mlModel',function(mlJsonp){
        return {
            getTop250:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/top250?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                mlJsonp(url,function(data){
                    callback(data);
                })
            },
            getInTheaters:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/in_theaters?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                mlJsonp(url,function(data){
                    callback(data);
                })
            },
            getComingSoon:function(start, count, callback){
                var url = `http://api.douban.com/v2/movie/coming_soon?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                mlJsonp(url,function(data){
                    callback(data);
                })
            },
            getSubject:function(id,callback){
                var url = `http://api.douban.com/v2/movie/subject/${id}?&callback=JSONP_CALLBACK`;
                mlJsonp(url,function(data){
                    callback(data);
                })
            }
        }
    })

})();