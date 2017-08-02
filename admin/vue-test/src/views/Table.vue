<template>
  <div>
    <div class="toolbar">
      <form class="form-inline">
        <input type="text" class="form-control" placeholder="姓名">
        <button class="btn btn-success" >查询</button>
        <button class="btn btn-primary">新增</button>
      </form>
    </div>
    <div class="tablebar">
      <table class="table table-hover" :data="users">
        <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>#</th>
          <th prop="name">姓名</th>
          <th prop="sex">性别</th>
          <th prop="birth">生日</th>
          <th prop="addr">地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>111</td>
          <td>颜丽菁</td>
          <td>女</td>
          <td>199.06.26</td>
          <td>sadxssffd</td>
          <td>
            <button class="btn btn-default">编辑</button>
            <button class="btn btn-danger" >删除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation pull-right">
        <button class="btn btn-info">批量删除</button>
        <ul class="pagination pull-right">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script>

  import { getUserListPage } from '../api/api';
    export default{
      data(){
        return{
          users:[],
          listLoading:false
        }
      },
      method:{
        getUsers(){
          let para = {

          }
          getUserListPage(para).then((res) =>{
            this.users = res.data.users;
          });
        },
        mounted(){
          this.getUsers();
        }
      }
    }
</script>

<style scoped>
  .toolbar{
    width:100%;
    background-color:#fff;
    padding:10px
  }
  .tablebar{
    margin:0px 10px 0px 10px;
  }
  table{
    margin-bottom:0px;
  }
  table tbody tr{
    background-color:#fff;
  }
  nav ul{
    margin:0;
    padding:8px;
  }
  nav button{
    margin:8px 0 0 8px;
  }
</style>
