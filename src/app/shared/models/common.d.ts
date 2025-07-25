interface IDeepLinkingDetails {
  user_type: string;
  route_value: string;
  need_to_login: number;
  route_description?: string;
  route_details: Record<string, any>;
  route_identification: string | number;
}

interface IDropdownOption {
  id?: number | string;
  value?: number | string;
  label?: number | string;
}

type IStringMatchMode =
  | 'startsWith'
  | 'endsWith'
  | 'contains'
  | 'notContains'
  | 'equals'
  | 'notEquals';

type INumberMatchMode = 'equals' | 'notEquals' | 'lt' | 'lte' | 'gt' | 'gte';

type IDateMatchMode = 'dateIs' | 'dateIsNot' | 'dateIsBefore' | 'dateIsAfter';

interface IBespokeInfo {
  id: number;
  image: string;
  information: string;
}

type IPageType = 'add' | 'edit';
