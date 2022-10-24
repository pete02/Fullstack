const blog = require('../models/blog')

const dummy = (blogs) => {
  return 1
}

const totalLikes=(blogs) => {
  return blogs.reduce(count,0)
}
const count=(total,part) => {
  return total+part.likes
}

const favorite=(blogs) => {
  let fave=blogs[0]
  blogs.forEach(blog => {
    if(blog.likes>fave.likes){
      fave=blog
    }
  })
  return fave
}

const mostLikes=(blogs) => {
  let auths=[]
  blogs.forEach(blog => {
    if(auths.find(a => a.author===blog.author)){
      auths.map(auth => {
        if(auth.author===blog.author){
          auth.likes+=blog.likes
          console.log(`current author:${auth.author}`)
        }
      })
    }else{
      if(auths.length>0){
        auths=auths.concat({ author:blog.author, likes:blog.likes })
      }else{
        auths=[{author:blog.author, likes:blog.likes}]
      }
    }
  })
  return favorite(auths)
}
const mostBlogs=(blogs) => {
  let writer=blogs[0].author
  let max=0
  blogs.forEach(blog => {
    if(blogs.filter(b => b.author===blog.author).length>max){
      writer=blog.author
      max=blogs.filter(b => b.author===blog.author).length
    }
  })
  return { author:writer,blogs:max }
}


module.exports = {
  dummy,
  totalLikes,
  favorite,
  mostBlogs,
  mostLikes
}