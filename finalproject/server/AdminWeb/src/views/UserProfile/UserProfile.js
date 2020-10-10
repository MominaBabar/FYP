import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import { Redirect } from 'react-router-dom'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from 'react-redux';
import {getitems, deleteitem,getactiveusers,editadmin,getavailmachines,edituser,updateadmin,getadmins,deleteadmin} from '../../actions/itemaction';
import PropTypes from 'prop-types';
import tehmina from "assets/img/tehmina.jpg";

import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import avatar from "assets/img/faces/marc.jpg";
const pic = JSON.parse(localStorage.getItem('picture'));
const u = JSON.parse(localStorage.getItem('user'));
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  btnFile: {
    position: "relative",
    overflow: "hidden"
  },
  btnFileInput: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: '100px',
    textAlign: 'right',
    filter: 'alpha(opacity=0)',
    opacity: 0,
    outline: 'none',
    background: 'white',
    cursor: 'inherit',
    display: 'block',
}
};
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const useStyles = makeStyles(styles);

class UserProfile extends React.Component {
  state={
    email:"",
    password:"",
    confirm:"",
    _id:"",
    file:"",
    picture:{} ,
    filename:"",
    loading:false
  }
  componentDidMount(){
    console.log(u);
    this.setState({_id: u._id});
    this.setState({email: u.email});
    this.setState({password: u.password});
    this.setState({picture: tehmina});

  }
  onEditChange(value){
    this.setState({
         email: value
    });
  }
  onpChange(value){
    this.setState({
         password: value
    });
  }
  onpcChange(value){
    this.setState({
         confirm: value
    });
  }
  onpicChange(value){
    this.setState({
         file: value.files[0]
    });
    this.setState({
      filename: value.files[0].name
 });
   console.log(value.files[0])
  }
  // onSubmitFile = (e) => {
  //   e.preventDefault();
  //   console.log("llll");
  //   let data = new FormData(document.getElementById("myform"));  
  //     data.append("_id", this.state._id); 
  //     for (var [key, value] of data.entries()) { 
  //       console.log(key, value);
  //     }
  //     console.log(this.state._id);
  //     this.props.updateadmin(this.state._id,data);
  // }
  onSubmit = (e) => {
    e.preventDefault();
    
    if(this.state.password===this.state.confirm){
      const newItem = {
        _id: this.state._id,
        email: this.state.email,
        password: this.state.password
      }
      console.log(newItem);
      this.props.editadmin(newItem);
      

    }
    else{
      window.alert("Password and confirm password do not match!")
    }
     
  }
  render()
  {
  const u = JSON.parse(localStorage.getItem('user'));
    if(u.isLoggedin==false){
      return  <Redirect to="/" />
    }
    else{
  return (
    <div>
      <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={70}
        color={"#123abc"}
        loading={this.state.loading}
      />
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 >Edit Profile</h4>
              <p >Complete your profile</p>
            </CardHeader>
            <CardBody>
            <Form  onSubmit={this.onSubmit}>
                    <FormGroup>
                      
                  <Label>Email</Label>
                  
                     <Input
                       type="text"
                       name="email"
                       id="item"
                       value={this.state.email}
                       placeholder="Enter Email"
                       onChange={e => this.onEditChange(e.target.value)}
                       style={{marginBottom:'0.5rem' }}
                     />
                    <Label>Password</Label>
                     <Input
                       type="password"
                       name="password"
                       id="pp"
                       value={this.state.password}
                       placeholder="Enter Password"
                       onChange={e => this.onpChange(e.target.value)}
                       style={{marginBottom:'0.5rem' }}
                     />
                      <Label>Confirm Password</Label>
                     <Input
                       type="password"
                       name="confirm"
                       id="cp"
                       value={this.state.confirm}
                       placeholder="Confirm Password"
                       onChange={e => this.onpcChange(e.target.value)}
                       style={{marginBottom:'0.5rem' }}
                     />
                 <Button color="primary" round onClick={this.onSubmit} >
                
                      
                      Update Profile
                    </Button>
                    </FormGroup>
                  </Form>
                
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={tehmina} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
                  <h6 style={{color:'black'}}>{u.email}</h6>
              <h4  style={{color:'black'}}>Admin</h4>
              <p  style={{color:'black'}}>
               {u.Aboutme}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      
    </div>
  );
                  }
                  }
}


UserProfile.propTypes = {
  getitems: PropTypes.func.isRequired,
  deleteitems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  item: state.item
});
export default connect(mapStateToProps, {getitems,editadmin,deleteadmin,updateadmin, deleteitem,getactiveusers,getavailmachines,edituser,getadmins
})(UserProfile);
