# 知识点

## 2 app.use(中间层)

这像是后端的外壳。用户事件之后，先到达这一层。
中间层需要有 next() 才会执行下一个任务
middleware modifies the request before it reaches the route handler

app.use(中间层)作用于所有 handler
app.get(route, 中间层, (req, res))只作用于这一层

## 3 MongoDB setup

module.exports = {
MONGOURI:
"mongodb+srv://admin:jikuibu@cluster0.jb2dd.mongodb.net/<dbname>?retryWrites=true&w=majority",
};
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
