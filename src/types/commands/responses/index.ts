export interface EppResponse {
  epp: {
    response: {
      result: Array<{
        $: {
          code: string;
        };
        msg: string[];
        extValue?: Array<{
          value: string[];
          reason: string[];
        }>;
      }>;
      msgQ?: {
        $: {
          count: string;
          id: string;
        };
        qDate: string[];
        msg: string[];
      };
      resData?: {
        [key: string]: any;
      };
      trID: {
        clTRID?: string[];
        svTRID: string[];
      };
    };
  };
}
