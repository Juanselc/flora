import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { sign } from 'crypto';
// import * as firebase from 'firebase/app'; 
import { AngularFirestore }  from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../share/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return (null);
      })
    );
  }

  async sendVerifcationEmail(): Promise<void>{
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    }
    catch(error){console.log('Error-->', error)}
  }
  async resetPassword(email:string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error){console.log('Error-->',error)}
  }
  // async loginGoogle(): Promise<user>{
  //   try {
  //     const {user}= await this.afAuth.signInWithPopup(new Auth.GoogleAuthProvider());
  //     return user;
  //   }
  //   catch (error){console.log('Erorr-->',error)}

  // } 
  async register(email: string, password: string): Promise<User>{
    try{
      console.log(email, password);
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // console.log(email, password, user);
      await this.sendVerifcationEmail();
      return user;
    }
    catch(error){console.log('Error-->',error)}
  }
  async Login(email: string, password: string): Promise<User>{
    try{
      const { user }= await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData( user );
      return user;
    }catch (error)
    {console.log ('Error-->', error)}
  }
  async logout(): Promise<void>{
      try {
        await this.afAuth.signOut();
    } catch (error){console.log('Error-->',error);
    }
  }
  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}` );
    const data:User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    return userRef.set(data, {merge: true});
  }
}
