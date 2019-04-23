// 创建localStorage
var STORAGE_KEY = 'todolist'

function fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
        || '[]')
    }
function save(items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

// 创建vue实例
var doit = new Vue({
    el: '#app',
    data: {
        newtodo: {
            content: '',
            done: false
        },
        todolist: fetch(),
        dialogVisible: false
    },
    methods: {
        // 添加项目
        add: function () {
            if (this.newtodo.content) {
                this.todolist.push(this.newtodo)
                this.newtodo = { content: '', done: false }
            }
        },
        // 删除项目
        del: function (index) {
            this.todolist.splice(index, 1)
        },
    },
    computed: {
        // 完成项目统计
        donenum: function () {
            return this.todolist.filter(function (val) { return val.done }).length
        }
    },
    watch: {
        // 监听
        todolist: {
            handler(items) {
                save(items)
            },
            deep: true
        }
    }
})