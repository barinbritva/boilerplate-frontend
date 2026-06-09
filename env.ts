export const env = {
	nodeEnv: process.env['NODE_ENV'] ?? 'production',
	devServerPort: process.env['DEV_SERVER_PORT'] ? Number(process.env['DEV_SERVER_PORT']) : 5173,
} as const;
