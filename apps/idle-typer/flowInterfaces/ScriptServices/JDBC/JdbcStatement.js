// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-statement

interface gas$JdbcStatement {
  addBatch(sql: string): void;
  cancel(): void;
  clearBatch(): void;
  clearParameters(): void;
  clearWarnings(): void;
  close(): void;
  execute(sql: string): boolean;
  execute(sql: string, autoGeneratedKeys: number): boolean;
  execute(sql: string, columnIndexes: number[]): boolean;
  execute(sql: string, columnNames: string[]): boolean;
  executeBatch(): number[];
  executeQuery(sql: string): gas$JdbcResultSet;
  executeUpdate(sql: string): number;
  executeUpdate(sql: string, autoGeneratedKeys: number): number;
  executeUpdate(sql: string, columnIndexes: number[]): number;
  executeUpdate(sql: string, columnNames: string[]): number;
  getConnection(): gas$JdbcConnection;
  getFetchDirection(): number;
  getFetchSize(): number;
  getGeneratedKeys(): gas$JdbcResultSet;
  getMaxFieldSize(): number;
  getMaxRows(): number;
  getMetaData(): gas$JdbcResultSetMetaData;
  getMoreResults(): boolean;
  getMoreResults(current: number): boolean;
  getQueryTimeout(): number;
  getResultSet(): gas$JdbcResultSet;
  getResultSetConcurrency(): number;
  getResultSetHoldability(): number;
  getResultSetType(): number;
  getUpdateCount(): number;
  getWarnings(): string[];
  isClosed(): boolean;
  isPoolable(): boolean;
  setCursorName(name: string): void;
  setEscapeProcessing(enable: boolean): void;
  setFetchDirection(direction: number): void;
  setFetchSize(rows: number): void;
  setMaxFieldSize(max: number): void;
  setMaxRows(max: number): void;
  setPoolable(poolable: boolean): void;
  setQueryTimeout(seconds: number): void;
}
