$(document).ready(function() {
    localStorage.setItem("booklist","");
  })
  var index=0
  $("#bookForm").on("submit", function(evt) {
      evt.preventDefault()
      $inputs = $('#bookForm :input')
      values = {}
      $inputs.each(function() {
          values[this.name] = $(this).val()
      })
      if(values["name"]==""||values["category"]==""||values["price"]=="") {
        return
      }
      if($('input[type="submit"]').val()=="Add")
      {
        book={
          name: values["name"],
          category: values["category"],
          price: values["price"]
        }
        books=localStorage.getItem("booklist")
        bookList=[]
        if(books.length) {
          bookList=JSON.parse(localStorage.getItem("booklist"))
        }
        bookList.push(book)
        localStorage.setItem("booklist",JSON.stringify(bookList))
      }
      else{
        bookList=JSON.parse(localStorage.getItem("booklist"))
        bookList[index].name=$('input[name="name"]').val()
        bookList[index].category=$('input[name="category"]').val()
        bookList[index].price=$('input[name="price"]').val()
        console.log(bookList)
        localStorage.setItem("booklist",JSON.stringify(bookList))
      }
      displayBookList()
      $("#bookForm")[0].reset()
      $('input[type="submit"]').val("Add")
  })
  function displayBookList() {
      $("#booklist").html('')
      books=localStorage.getItem("booklist")
      bookList=[]
      if(books.length) {
        bookList=JSON.parse(localStorage.getItem("booklist"))
      }
      for(i in bookList) {
        $("#booklist").append('<div><div class="actionButttons"><button onclick="delBook('+i+')">Delete</button><button onclick="updateBook('+i+')">Change Name</button></div><img src="book.png" width="400px" height="400px"><br><div class="details">Name: '+bookList[i].name+'<br>Price: '+bookList[i].price+'<br>Category: '+bookList[i].category+'<div></div>')
      }
  }
  function delBook(i)
  {
    bookList=JSON.parse(localStorage.getItem("booklist"))
    newList=[]
    for(j in bookList) {
      if(i!=j) {
        newList.push(bookList[j])
      }
    }
    console.log(newList)
    localStorage.setItem("booklist",JSON.stringify(newList))
    $("#bookForm")[0].reset()
    displayBookList()
  }
  function updateBook(i)
  {
    bookList=JSON.parse(localStorage.getItem("booklist"))
    $('input[name="name"]').val(bookList[i].name)
    $('input[name="category"]').val(bookList[i].category)
    $('input[name="price"]').val(bookList[i].price)
    $('input[type="submit"]').val("Update")
    index=i
  }
  console.log(localStorage);
