export class Young implements AgeGroup{
    canVote(): boolean {
        return false;
    }
    canDrive(): boolean {
        return false;
    }
}
