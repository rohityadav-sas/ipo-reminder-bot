export interface Endpoints {
	login: string;
	IPO: string;
}

export interface IPOData {
	subGroup: string;
	companyName: string;
	shareTypeName: string;
	shareGroupName: string;
	issueOpenDate: string;
	issueCloseDate: string;
}

export interface ipoRequestPayload {
	filterFieldParams: { key: string; alias: string; value?: string }[];
	page: number;
	size: number;
	searchRoleViewConstants: string;
	filterDateParams: {
		key: string;
		condition: string;
		alias: string;
		value: string;
	}[];
}
