import React, {useEffect, useState} from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const StudentSettings = () => {
    const [turns, setTurns] = useState([])
    const url = process.env.REACT_APP_URL;
    const [cookies] = useCookies(["user"])


    useEffect(() => {
        fetchTurns().then(res => {
            setTurns(res)
        })
    }, [])



    async function fetchTurns() {
        try {
            const resp = await axios.get(url + "/turnus/all_by_year", {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }


    const handleNameChange = e => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to change your name?")) {
            changeName(document.getElementById("newName").value).then(res => {
                if (res === undefined) {
                    alert("An error occurred, please try again later!")
                }
                else {
                    alert("Update was successfully, please log in again to refresh your data")
                }
            })
        }

    }



    const changeName = async name => {
        const data = {
            name,
        }
        try {
            const resp = await axios.put(url + "/student/" + cookies.user.id + "/name/update" , data, {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }
    const changeEmail = async email => {
        const data = {
            email,
        }
        try {
            const resp = await axios.put(url + "/student/" + cookies.user.id + "/email/update" , data, {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }
    const changeNeptunCode = async neptunCode => {
        const data = {
            neptunCode,
        }
        try {
            const resp = await axios.put(url + "/student/" + cookies.user.id + "/neptunCode/update" , data, {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }
   const changePassword = async password => {
        const data = {
            password,
        }
        try {
            const resp = await axios.put(url + "/student/" + cookies.user.id + "/password/update" , data, {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }
   const changeTurnus = async turnusId => {
        const data = {
            turnusId,
        }
        try {
            const resp = await axios.put(url + "/student/" + cookies.user.id + "/turnus/update" , data, {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }




    const handleEmailChange = e => {
        e.preventDefault()
        if (document.getElementById("email1").value === document.getElementById("email2").value) {
            if (window.confirm("Are sure you want to change your email?")) {
                changeEmail(document.getElementById("email1").value).then(res => {
                    if (res === undefined) {
                        alert("This email is already used")
                    }
                    else {
                        alert("Update was successfully, please log in again to refresh your data")
                    }
                })
            }

        }
        else {
            alert("Emails must be the same!")
        }
    }

    const handleNeptunCodeChange = e => {
        e.preventDefault()
            if (window.confirm("Are sure you want to change your neptunCode?")) {
                changeNeptunCode(document.getElementById("neptunCode").value).then(res => {
                    if (res === undefined) {
                        alert("This neptunCode is already used")
                    }
                    else {
                        alert("Update was successfully, please log in again to refresh your data")
                    }
                })
            }
    }

    const handlePasswordChange = e => {
        e.preventDefault()
        if (document.getElementById("newPass1").value === document.getElementById("newPass2").value) {
            if (window.confirm("Are sure you want to change your password?")) {
                changePassword(document.getElementById("newPass1").value).then(res => {
                    if (res === undefined) {
                        alert("An error occurred, please try again later!")
                    }
                    else {
                        alert("Update was successfully, please log in again to refresh your data")
                    }
                })
            }

        }
        else {
            alert("Passwords must be the same!")
        }
    }
    const handleTurnusChange = e => {
        e.preventDefault()
            if (window.confirm("Are sure you want to change your turnus?")) {
                changeTurnus(document.getElementById("turner-1").value).then(res => {
                    if (res === undefined) {
                        alert("An error occurred, please try again later!")
                    }
                    else {
                        alert("Update was successfully, please log in again to refresh your data")
                    }
                })
            }

        else {
            alert("Passwords must be the same!")
        }
    }






    return <div className="studentSettings__container">
            <div className="studentSettings__inputContainer">
                <div className="newName">
                    <p>Change name:</p>
                    <form onSubmit={handleNameChange} >
                        <input id={"newName"} required={"required"} type="text"/> <br/>
                        <button  type={"submit"}>save</button>
                    </form>
                </div>
                <div className="newEmail">
                    <p>Change Email:</p>
                    <form onSubmit={handleEmailChange} >
                    <input placeholder={"new email"} id={"email1"} required={"required"} type="email"/> <br/>
                    <input placeholder={"confirm new email"} id={"email2"} required={"required"} type="email"/> <br/>
                    <button type={"submit"}>save</button>
                    </form>
                </div>
                <div className="newPassword">
                    <p>Change Password:</p>
                    <form onSubmit={handlePasswordChange} >
                        <input placeholder={"???????????????????????????"}  required={"required"} id={"newPass1"} type="password"/> <br/>
                        <input placeholder={"???????????????????????????"}  required={"required"} id={"newPass2"} type="password"/> <br/>
                        <button type={"submit"}>save</button>
                    </form>

                </div>
                <div className="newTurnus">
                    <p>Change Turnus:</p>
                    <select name="turn-1" id="turner-1" className="newLesson__turnSelect">
                        {turns.map(turn => (
                            <option value={turn.id} className="turn__option">{turn.name}</option>
                        ))}
                    </select> <br/>
                    <button onClick={handleTurnusChange}  >save</button>
                </div>
                <div className="newNeptunCode">
                    <p>Change neptun code:</p>
                    <form onSubmit={handleNeptunCodeChange} >
                        <input  id={"neptunCode"} required={"required"} type="text"/> <br/>
                        <button type={"submit"}>save</button>
                    </form>
                </div>
                <button onClick={e => {window.location = "/student"}}>Back</button>
            </div>
    </div>

}




export default StudentSettings;
