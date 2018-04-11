class Comment extends React.Component {
  render() {
    return (
      <div>
        i am a hard coded comment! help! make me dynamic!
      </div>
    )
  }
}
class BlogPost extends React.Component {
render(){
  return(
    <div>
    <div id="blog-content">
          Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
        </div>

        <Comment content={"I agree with this statement. - Angela Merkel"}/>
        <Comment content={"A universal truth. - Noam Chomsky"}/>
        <Comment content={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>
    </div>
  )
}

}
