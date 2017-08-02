import Mock from 'mockjs';
const Users =[];

for(let i=0;i<88;i++){
  Users.push(Mock.mock({
    id:Mock.Random.guid(),
    name:Mock.Random.cname(),
    addr:Mock.mock('@county(true)'),
    'age|16-80':1,
    birth:Mock.Random.data(),
    sex:Mock.Random.integer(0,1)
    }
  ))
};

export {Users};
