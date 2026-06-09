module.exports = ({ env }) => ({
  backup: {
    enabled: env.bool('BACKUP_ENABLED', false),
    config: {
      cronSchedule: env('BACKUP_CRON_SCHEDULE', '0 2 * * *'),
      storageService: env('BACKUP_STORAGE_SERVICE', 'aws-s3'),
      awsAccessKeyId: env('AWS_ACCESS_KEY_ID', ''),
      awsSecretAccessKey: env('AWS_SECRET_ACCESS_KEY', ''),
      awsRegion: env('AWS_REGION', 'us-east-1'),
      awsS3Bucket: env('AWS_S3_BUCKET', ''),
      databaseDriver: env('DATABASE_CLIENT', 'sqlite'),
      sqlite3Executable: env('SQLITE3_EXECUTABLE', '/usr/bin/sqlite3'),
      allowCleanup: env.bool('BACKUP_ALLOW_CLEANUP', false),
      timeToKeepBackupsInSeconds: env.int('BACKUP_RETENTION_SECONDS', 172800),
      cleanupCronSchedule: env('BACKUP_CLEANUP_CRON_SCHEDULE', '0 3 * * *'),
      errorHandler: (error) => {
        console.error('[backup]', error);
      },
    },
  },
});
