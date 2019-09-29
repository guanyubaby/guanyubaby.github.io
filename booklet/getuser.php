<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '2268615925';          // mysql用户名密码
$con = mysqli_connect($dbhost, $dbuser, $dbpass,'demo');
if(! $con )
{
    die('连接失败: ' . mysqli_error($con));
}
$q = $_GET['q'];
if($q=='')
    $sql="SELECT * FROM test ";
    else
$sql="SELECT * FROM test WHERE username = '$q'";
$result = mysqli_query($con,$sql);
$index=1;

//while()
/**
 * 单引号和双引号在这里有很大的不同
 */
echo '<table class="table">';
echo "<thead>
        <tr>
        <th>许愿人</th>
        <th>许愿密码</th>
        <th>心愿分享</th>
        <th>操作</th>
        <th>操作</th>
        <th>要修改的内容</th>
        </tr>
        </thead>
        <tbody>";


while($row = mysqli_fetch_assoc($result))
{

    $passwordindex='22222'.$index;
    $adviceindex='11111'.$index;
    $updateadviceindex='33333'.$index;
    echo"<tr >";
    echo"<td  id=$index>$row[username]</td>";
    echo"<td id=$passwordindex>$row[password]</td>";
    echo"<td  data-toggle=modal data-target=#myModal id=$adviceindex onclick='shifttext($index,$adviceindex,$passwordindex)'>$row[advice]</td>";//将advice的id的通过函数参数传给id
    //echo "<td><button  onclick=showid($index)>删除</button></td>";
    echo "<td><button  onclick=showid($index,$adviceindex,$passwordindex)>删除</button></td>";
    echo "<td><button  onclick=updateid($index,$updateadviceindex,$passwordindex)>修改</button></td>";
  // echo "<td><input id=$updateadviceindex></td>";
    echo"<tr>";
    $index++;
}

/**
 * 如果不加while，则只会输出相同id下的同一数据，若使用while，则可以全部显示
 */
echo "  </tbody>";
echo '</table>';



?>