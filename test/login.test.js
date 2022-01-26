import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"omonze123@gmail.com", password: "OmOnZe1@"})

    assert.equal(loginToken.length,36);

})