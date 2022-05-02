type VoteOption = {
    votesNumber: number;
    option: string;
};

export class Voting {
    private _voteOptions: VoteOption[] = [];
    constructor(public details: string) { }

    addVoteOption(voteOption: VoteOption): void {
        this._voteOptions.push(voteOption);
    }

    vote(voteIndex: number): void {
        if (!this._voteOptions[voteIndex]) return;
        this._voteOptions[voteIndex].votesNumber += 1;
    }

    get voteOptions(): VoteOption[] {
        return this._voteOptions;
    }
}

export class VotingApp {
    private votes: Voting[] = [];

    addVote(vote: Voting): void {
        this.votes.push(vote);
    }

    showVotes(): void {
        for (const vote of this.votes) {
            console.log(vote.details);
            for (const voteOption of vote.voteOptions) {
                console.log(voteOption.option, voteOption.votesNumber);
            }
            console.log('####################')
        }
    }
}

const voting = new Voting('What is your favorite programming language?');

voting.addVoteOption({ option: 'JavaScript', votesNumber: 0 });
voting.addVoteOption({ option: 'Dart', votesNumber: 0 });
voting.addVoteOption({ option: 'C', votesNumber: 0 });
voting.addVoteOption({ option: 'TypeScript', votesNumber: 0 });
voting.addVoteOption({ option: 'Python', votesNumber: 0 });

voting.vote(0);
voting.vote(0);
voting.vote(3);
voting.vote(3);
voting.vote(3);
voting.vote(4);

const votingApp = new VotingApp();
votingApp.addVote(voting);

votingApp.showVotes();
