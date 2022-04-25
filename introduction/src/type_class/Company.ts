export class Company {
    public readonly name: string;
    private readonly collaborators: Collaborator[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addCollaborator(collaborator: Collaborator): void {
        this.collaborators.push(collaborator);
    }

    showCollaborators(): void {
        this.collaborators.forEach(
            collaborator => console.log(collaborator)
        );
    }
}

export class Collaborator {
    constructor(
        public readonly first_name: string,
        public readonly last_name: string
    ) { }
}

const company = new Company('FabioCompany', '11.111.111/0001-11');

const collaborator1 = new Collaborator('Mark', 'Thompson');
const collaborator2 = new Collaborator('Adam', 'Green');
const collaborator3 = new Collaborator('Tom', 'Cooper');

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);

company.showCollaborators();


