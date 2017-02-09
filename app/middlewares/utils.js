module.exports = {
    getByProp: function getByProp(options) {
        if (options.data.length > 0) {
            var hasPropArr = [];
            for (var i = 0; i < options.data.length; i++) {
                var cur = options.data[i];
                if (cur[options.key] == options.val) {
                    hasPropArr.push(cur);
                }
            }
            // console.log('hasPropArr', hasPropArr);
            return hasPropArr;
        }
    },

    getSpecialNumObjs: function getSpecialNumObjs(options) {
        var arr = [];
        if (options.data.length && options.data.length > options.num) {
            for (var i = 0; i < options.num; i++) {
                arr.push(options.data[i])
            }
        } else {
            return options.data;
        }
        return arr;
    },
    // 获取当前分类 时间排序后下当前文章的上一篇与下一篇
    getPrevAndNextPost: function getPrevPost(options) {
        if (options.data.length > 0) {
            // var data = this.sortByProp({
            //     data: this.getByProp({
            //         data: options.data,
            //         key: options.category
            //     }),
            //     key: options.sortKey
            // })
            var data = this.getByProp({
                data: options.data,
                key: options.category
            })
            var prevPostIndex = 0;
            var nextPostIndex = 1;
            for (var i = 0; i < data.length; i++) {
                var cur = data[i];
                if (cur._id == options._id) {
                    prevPostIndex = i - 1 ;
                    nextPostIndex = i + 1;
                }
            }
            // console.log('hasPropArr', hasPropArr);
            return {
                prevPost: data[prevPostIndex],
                nextPost: data[nextPostIndex]
            };
        }
    },

    sortByProp: function sortByProp(options) {
        if (options.data.length && options.data.length > 0) {
            options.data.sort(function (a, b) {
                return b[options.key] - a[options.key];
            });
            return options.data;
        }
    },

    unique: function unique(options) {
        var res = [];
        var json = {};
        for (var i = 0; i < options.data.length; i++) {
            var cur = options.data[i];
            if (!json[cur[options.key]]) {
                res.push({
                    name: cur[options.key],
                    parent_category: options.category,
                    active: options.sub_category
                });
                json[cur[options.key]] = 1;
            }
        }
        return res;
    },

    //获取分页信息
    getPages: function getPages(options) {
        if (options.data.length && options.data.length > 0) {
            var countPage = (options.data.length % options.pageSize == 0 ? options.data.length / options.pageSize
              : Math.ceil(options.data.length / options.pageSize));
            var isFirstPage = (options.currentPage - 1 == 0);
            var isLastPage = (options.currentPage == countPage);
            // 分页获取指定条数数据
            var records;
            if (!isLastPage) {
                records = options.data.slice((options.currentPage - 1) * 10, (options.currentPage - 1) * 10 + options.pageSize )
            } else {
                records = options.data.slice((options.currentPage - 1) * 10, (options.currentPage - 1) * 10 + options.data.length % options.pageSize)
            }
            var pageArr = [];
            for (var i = 0; i < countPage; i++) {
                pageArr.push(i);
            }
            return {
                isFirstPage: isFirstPage,
                isLastPage: isLastPage,
                pageArr: pageArr,
                category: options.category,
                currentPage: options.currentPage,
                lastPage: countPage,
                records: records
            }
        }
    }
};
