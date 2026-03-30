export type GetAllByStatusResponse = {
    id: string;
    email: string;
    status: string;
    createdAt: string;
    verifiedAt: string | null;
    updatedAt: string | null;
}