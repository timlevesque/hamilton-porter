import React from 'react';

 
class GhostWriter extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        substring: "",
        basePhrase : this.props.phrases[0] || "",
        idx: 0,
        typing: true
      }
    }
    static defaultProps = {
      loop: true,
      typeInterval: 10,
      pauseInterval: 400,
    }
    
    componentDidMount(){
      this.startTyping();
    }
    startTyping(){
      this.intervalID=setInterval(()=>{this.tick()}, this.props.typeInterval);
    }
    stopTyping(){
      clearInterval(this.intervalID);
    }
    pause(shouldResume){
      this.stopTyping();
      this.pauseID = setTimeout(()=>{ if(shouldResume()) this.startTyping()}, this.props.pauseInterval);
    }
    componentWillUnmount(){
      clearInterval(this.intervalID);
      clearTimeout(this.pauseID);
    }
    tick(){
      this.setState((state, props)=>{
        let { substring, basePhrase, typing, idx } = state;
        
        // Type
        if(state.typing){
          substring = state.basePhrase.slice(0, state.substring.length+1);
          // End-of-phrase
          if(state.substring.length >= state.basePhrase.length){
            typing = false;
            this.pause(()=>{
              // Resume conditionally
              return (props.loop || idx < props.phrases.length-1);
            }); 
          }
        } 
        // Delete
        else{
          substring = state.substring.slice(0, state.substring.length-1);
          // Next phrase
          if(!typing && state.substring.length === 0){
            typing = true;
            idx = ++state.idx%this.props.phrases.length;
            basePhrase = this.props.phrases[idx];
          }
        }
        return {
          ...state,
          substring,
          basePhrase,
          typing,
          idx
        }
        
      })
    }
   
    
    render() {
      return (
        <span className="ghostwriter">
          {this.state.substring}
        </span>
      );
    }
  }
  

  
export default GhostWriter;