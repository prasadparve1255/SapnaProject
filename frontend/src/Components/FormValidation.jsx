import React from 'react'
import { useState } from 'react';

function FormValidation() {
    const [uname, setUname] = useState()
    const [uerror, setUerror] = useState(false)
    const [mno, setMno] = useState()
    const [pass, setPass] = useState()
    const [perr, setPerr] = useState(false)
    const [cpass, setCpass] = useState()
    const [cerr, setCerr] = useState(false)
    const [merror, setMerror] = useState(false)
    const [status, setStatus] = useState(false)
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)

    const pattern = /^[6-9]\d{9}$/
    const password1 = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;



    function uHandler(e) {

        let un = e.target.value.length
        setUname(e.target.value)

        if (un < 5) {
            setUerror(true)
        }
        else {
            setUerror(false)
        }

    }

    function mHandler(e) {
        setStatus(true)
        let mno = e.target.value
        setMno(mno)
        if (!pattern.test(mno)) {
            setMerror(true)
        }
        else {
            setMerror(false)
        }
    }

    function pHandler(e) {
        setStatus1(true)
        let pass = e.target.value
        setPass(pass)

        if (!password1.test(pass)) {
            setPerr(true)
        }
        else {
            setPerr(false)
        }
    }

    function cHandler(e) {

        let cpass = e.target.value
        setCerr(cpass !== pass)
        // setCpass(cpass)
        setStatus2(true)
    }

    return (
        <>
            <table className="text-center m-auto">
                <tr>
                    <td>User Name:-</td>
                    <td><input type="text" name="uname" onChange={uHandler} autoComplete='off' /></td>
                </tr>

                <tr>
                    <td></td>
                    <td style={{ 'color': "red" }}> {uerror && "User Name Should be > 5"}</td>
                </tr>

                <tr>
                    <td>Mobile No:-</td>
                    <td>< input type="number" name="mno" onChange={mHandler} autoComplete="off" /></td>
                </tr>

                <tr>
                    <td></td>
                    {
                        status &&
                        <>
                            <td className={`${merror ? 'text-danger' : "text-success"}`}>{merror ? "invalid Mobile Number" : `Your Mobile Number is:-${mno}`}</td>
                        </>
                    }

                </tr>

                <tr>
                    <td>password:-</td>
                    <td><input type="password" name="password" onChange={pHandler} autoComplete="off" /></td>
                </tr>

                <tr>
                    <td></td>
                    {
                        status1 &&
                        <>
                            <td className={`${perr ? 'text-danger' : "text-success"}`}>{perr ? "password is incorrect" : "password is Correct"}</td>
                        </>
                    }

                </tr>
                <tr>
                    <td>Confirm Password:-</td>
                    <td><input type="password" name="cpass" onChange={cHandler} /></td>
                </tr>

                <tr>
                    <td></td>
                    {
                        status2 &&
                        <>
                            <td className={`${cerr ? 'text-danger' : "text-success"}`}>{cerr ? "password is Not Matched!" : "password is Matched"}</td>
                        </>
                    }

                </tr>
            </table>
        </>
    );
}

export default FormValidation