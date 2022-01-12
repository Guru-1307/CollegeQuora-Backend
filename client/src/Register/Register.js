import React from "react";

export default class Register extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : ''
        }
    }
    register = (event)=>{
        var ob = {
            role_type : this.role_type.value,
            user_name:this.user_name.value,
            email : this.email.value,
            password: this.password.value,
            dept_id: this.dept_id.value,
        }
        fetch(`http://localhost:8082/register`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.data})
        });;
        console.log(ob)
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <div className="form-v7">
	    <div className="page-content">
		<div className="form-v7-content">
			<div className="form-left">
				<img src="" alt="form" width="500px" height="700px"/>
			</div>
			<form className="form-detail"  onSubmit={this.register} action="">
				<h2>User Registration</h2>
				<div className="row"> <div className="col-md-6 mb-4"> <select className="select" ref={c=>this.role_type=c} id="form3Example1m1"> <option value="1">Role</option> <option value="2">Student</option> <option value="3">Teacher</option> </select> </div> <div className="col-md-6 mb-4"> <select className="select" ref={c=>this.dept_id=c} id="form3Example1m1"> <option value="1">Department</option> <option value="2">CSE</option> <option value="3">ECE</option> </select> </div> </div>
                <div className="form-row">
					<input type="text" ref={c=>this.user_name=c} name="user_name" id="user_name" className="input-text" placeholder="User Name"  />
				</div>
                <div className="form-row">
					<input type="text" ref={c=>this.email=c} name="email" id="email" className="input-text" placeholder="Enter your E mail" required/>
				</div>
				<div className="form-row">
					<input type="password" ref={c=>this.password=c} name="password" id="password" className="input-text" placeholder="Password" required/>
				</div>
                
				<b style={{color:"red"}}>{this.state.regmsg}</b>
				<div className="form-row-last">
                <button style={{borderRadius: '9px', border: 'px solid' ,width:'250px' ,height:'50px' }} type="submit" name="register" className="register" value="Register"> Submit</button>
                </div>
                <div>
                <a href='/login'>Not a user?</a>
                </div>
			</form>
		</div>
	</div>
</div>
            </div>
        )
    }

}