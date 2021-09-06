//test 

function startNow()
{

    document.getElementById("body").innerHTML = `
    <div class="content">
    
        <div class="p-4">
             <img class="wix-logo" src="https://static.parastorage.com/services/login-statics/1.1727.0/images/wix-logo.svg" alt="wix.photo">
        </div>
    
        <div class="text-center">
        
            <h1 class="fa-4x">Sign Up</h1>
            <span>Already have an account?</span>
            <a href="#">Sign In</a>
            
        </div>
    
        <!--stop here-->
        <div class="Exit"><i class="fas fa-times fa fa-2x p-4"></i></div>
    
    </div>
    
    <!--Container-->
        <div class="container buttons">
            <div class="row">
                    <div class="col-md-4 offset-md-2">
                    <div class="form-group mb-4 w-75">
                    <input type="email" name="email" class="form-control" placeholder="email">
                    </div>
                    <div class="form-group mb-4 w-75">
                    <input type="email" name="email" class="form-control" placeholder="Type Your email again">
                    </div>
                    <div class="form-group mb-4 w-75">
                    <input type="password" name="email" placeholder="Password" class="form-control">
                    </div>
                    <div class="form-group mb-4 w-75">
                    <input type="password" name="email" class="form-control" placeholder="Type your password again">
                    </div>
                    <button class="btnP2">Sign Up</button>
                </div>
                <!--line in middle-->
                <div class=" line col-md-2">
                    <span></span>
                </div>
                <div class="col-md-4 p-5">
                    <a href="https://ar-ar.facebook.com/">
                  <button class="btnRight" type="submit"><i class="fab fa-facebook-square"></i>Continue with Facebook </button>
                </a>
                <br>
                <br>
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fusers.wix.com%3Fid%3Dauth265146&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=352188552355.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fusers.wix.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                    <button class="btnRight" type="submit"><i class="fab fa-google"></i>Continue with Facebook </button>
                  </a>
            </div>
            <p class="text-center pt-5">* By signing up, you agree to our Terms of Use and to receive Wix emails & updates and acknowledge that<br> you read our Privacy Policy.</p>
            <p class="text-center pt-3">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy And Terms of Use apply</p>
        </div>
    </div>`
}


