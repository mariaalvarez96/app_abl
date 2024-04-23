import { Injectable } from "@angular/core";
import { User } from "../entity/user";

@Injectable({
    providedIn: 'root'
})
export class CurrentUserManager {

    saveCurrentUser(user: string): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getCurrentUser(): User|null {
        if (!this.hasUser()) {
            return null;
        }
        let userString: any = localStorage.getItem('currentUser');
        return new User(JSON.parse(userString));
    }

    hasUser(): boolean {
        let userString: string|null = localStorage.getItem('currentUser');
        console.log(userString);
        return (userString !== null && userString.length > 0);
    }
}