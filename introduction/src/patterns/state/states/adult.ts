export class Adult implements AgeGroup{
    canVote(): boolean {
        return true;
    }
    canDrive(): boolean {
        return true;
    }
}
