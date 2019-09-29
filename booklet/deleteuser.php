<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '2268615925';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
echo '连接成功<br />';
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$deletename = $_GET["deletename"];
$sql = "delete from test where username='$deletename'";


mysqli_select_db( $conn, 'demo' );

if($conn->query($sql,0))
{
    echo "OK";
}
else
{
    echo "NO";
}
?>