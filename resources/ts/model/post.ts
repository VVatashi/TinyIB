export interface PostData {
  id: number;
  parent_id: number;
  name: string;
  tripcode: string;
  email: string;
  subject: string;
  file?: string;
  created_at: number;
}
