var Utils = require('../middlewares/utils');
module.exports = function (options) {
    var currentPage = options.currentPage ? options.currentPage : 1;
    var category = options.category;
    var key = options.key ? options.key : 'category';
    var sub_category = options.sub_category ? options.sub_category : '';
    var all = category ? Utils.getByProp({data: options.data, key: key, val: category}) : options.data;
    var sub_all = Utils.getByProp({
        data: all,
        key: 'sub_category',
        val: sub_category
    });

    //所有数据：全部数据/分类下数据/子类数据？
    posts = sub_category ? sub_all : all;

    // var sub_all = options.sub_all ? options.sub_all : all;
    var postId = options.postId ? options.postId : '';

    return {
        all: posts,
        pages: Utils.getPages({
            data: posts,
            pageSize: 10,
            currentPage: currentPage,
            category: category
        }),
        post: options.post,

        prevAndNextPost: Utils.getPrevAndNextPost({
            data: posts,
            category: category,
            // sortKey: 'pv',
            _id: postId
        }),

        recommends: Utils.getSpecialNumObjs({
            data: Utils.getByProp({data: posts, key: 'recommend', val: true}),
            num: 8
        }),
        works: Utils.getSpecialNumObjs({
            data: Utils.getByProp({data: posts, key: 'category', val: 'works'}),
            num: 5
        }),
        newests: Utils.getSpecialNumObjs({data: posts, num: 13}),

        hotests: Utils.getSpecialNumObjs({
            data: Utils.sortByProp({data: posts, key: 'pv'}),
            num: 5
        }),

        sub_categories: Utils.getSpecialNumObjs({
            data: Utils.unique({
                data: Utils.sortByProp({
                    data: all,
                    key: 'pv'
                }),
                key: 'sub_category',
                category: category,
                sub_category: sub_category
            }),
            num: 10
        }),
        tags: Utils.getSpecialNumObjs({
            data: Utils.unique({
                data: Utils.sortByProp({data: all, key: 'pv'}),
                key: 'tag'
            }),
            num: 20
        }),

        fri_links: [
            {href: 'http://www.alloyteam.com/', title: '腾讯AlloyTeam'},
            {href: 'http://www.csdn.net/', title: 'CSDN'},
            {href: 'https://www.cnblogs.com/', title: '博客园'},
            {href: 'http://www.ruanyifeng.com/blog/', title: '阮一峰个人博客'},
            {href: 'https://github.com/', title: 'github'},
            {href: 'http://www.imooc.com/', title: '慕课网'}
        ]
    }
}



