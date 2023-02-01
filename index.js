const Button = (props) => {
  const { like, comment, share } = props;
  return (
    <div class="bg-container1">
      <h1 class="main-heading">Social Buttons</h1>
      <div class="buttons-container">
        <button class="likebutton">{like}</button>
        <button class="commentbutton">{comment}</button>
        <button class="sharebutton">{share}</button>
      </div>
    </div>
  );
};

const element = <Button like="Like"/>
<Button comment="Comment"/>
<Button share="Share"/>;

ReactDOM.render(element, document.getElementById("root"));
