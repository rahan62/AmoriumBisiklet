import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public name = '';
    public surname = '';
    public birthdate: any;
    public licenceNo: any;
    public users: any;
    public newUser: any;
    public sportsClub: any;
    public tcIdentity: any;

    constructor(public db: AngularFireDatabase) {
        this.db.list('users/').snapshotChanges().subscribe(items => {
            this.users = items.map(chs => {
                return chs.payload.val();
            });
        });
    }

    addUser() {
        this.newUser = {
            name: this.name,
            surname: this.surname,
            birthDate: this.birthdate,
            licenceNo: this.licenceNo,
            sportsClub: this.sportsClub,
            tcItentity: this.tcIdentity
        };
        this.users.push(this.newUser);
        this.db.object('users/').set(this.users);
        alert("Başarıyla Kayıt Oldunuz!");
    }
}
