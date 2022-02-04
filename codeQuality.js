// level {1/2/3}
// Level 2

async function getUsers() {
    const userProfile = {};
    let doc = await Promise.all(getUser(), getProfile(), getPosts()).then((res)=>{
        userProfile.user = res[0];
        userProfile.Profile = res[1];
        userProfile.p = res[2];
    }).catch(err=>{
        console.log(err);
        throw new Error(err);
    })
    
    return userProfile;
  }
