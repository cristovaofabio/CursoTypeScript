export class Adolescent implements AgeGroup{
    canVote(): boolean {
        return true;
    }
    canDrive(): boolean {
        return false;
    }
}
