<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '2268615925';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$uername = $_GET["updatename"];
$useradvice = $_GET["updateadvice"];//修改成功后的建议
$userpassword=$_GET["updatepassword"];
$sql = "update test set advice='$useradvice' where username='$uername' and password='$userpassword'";
mysqli_select_db( $conn, 'demo' );
$conn->query($sql,0)
?>