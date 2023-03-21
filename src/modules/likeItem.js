const likeItem =(likes,involvmentApiUrlLikes)=>{
    const likeBtn = document.querySelectorAll('.likeBtn')
    const likeCount = document.querySelectorAll('#likesCounter');
    likeBtn.forEach((btn,i)=>{
      btn.addEventListener('click',()=>{
        likeCount[i].textContent = parseInt(likeCount[i].textContent) + 1;
        const itemId = likes[i].item_id
        const likesNo = likeCount[i].textContent 
        fetch(involvmentApiUrlLikes, {
    method: 'POST',
    body: JSON.stringify({
      item_id:itemId,
      "likes":likesNo
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      })
    })
  }
  export default likeItem