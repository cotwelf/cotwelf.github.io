export const getFile = () => {
  //读取markdown内容
  let xml=new XMLHttpRequest()
  xml.open("GET","test.md")
  xml.send()
  xml.onreadystatechange=function(){
    if(xml.readyState==4 && xml.status==200){
        //获取到数据之后渲染到html中
        let markdownView=document.getElementById("markdownContent")
        let markdownContent=marked(xml.response)
        markdownView.innerHTML=marked(markdownContent)
      }
    }
}
