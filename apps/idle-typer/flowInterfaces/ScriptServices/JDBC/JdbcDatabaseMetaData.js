// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data

interface gas$JdbcDatabaseMetaData {
  allTablesAreSelectable(): boolean;
  autoCommitFailureClosesAllResultSets(): boolean;
  dataDefinitionCausesTransactionCommit(): boolean;
  dataDefinitionIgnoredInTransactions(): boolean;
  deletesAreDetected(type: number): boolean;
  doesMaxRowSizeIncludeBlobs(): boolean;
  getAttributes(catalog: string, schemaPattern: string, typeNamePattern: string, attributeNamePattern: string): gas$JdbcResultSet;
  getBestRowIdentifier(catalog: string, schema: string, table: string, scope: number, nullable: boolean): gas$JdbcResultSet;
  getCatalogSeparator(): string;
  getCatalogTerm(): string;
  getCatalogs(): gas$JdbcResultSet;
  getClientInfoProperties(): gas$JdbcResultSet;
  getColumnPrivileges(catalog: string, schema: string, table: string, columnNamePattern: string): gas$JdbcResultSet;
  getColumns(catalog: string, schema: string, table: string, columnNamePattern: string): gas$JdbcResultSet;
  getConnection(): gas$JdbcConnection;
  getCrossReference(parentCatalog: string, parentSchema: string, parentTable: string, foreignCatalog: string, foreignSchema: string, foreignTable: string): gas$JdbcResultSet;
  getDatabaseMajorVersion(): number;
  getDatabaseMinorVersion(): number;
  getDatabaseProductName(): number;
  getDatabaseProductVersion(): string;
  getDefaultTransactionIsolation(): number;
  getDriverMajorVersion(): number;
  getDriverMinorVersion(): number;
  getDriverName(): string;
  getDriverVersion(): string;
  getExportedKeys(catalog: string, schema: string, table: string): gas$JdbcResultSet;
  getExtraNameCharacters(): string;
  getFunctionColumns(catalog: string, schemaPattern: string, functionNamePattern: string, columnNamePattern: string): gas$JdbcResultSet;
  getFunctions(catalog: string, schemaPattern: string, functionNamePattern: string): gas$JdbcResultSet;
  getIdentifierQuoteString(): string;
  getImportedKeys(catalog: string, schema: string, table: string): gas$JdbcResultSet;
  getIndexInfo(catalog: string, schema: string, table: string, unique: boolean, approximate: boolean): gas$JdbcResultSet;
  getJDBCMajorVersion(): number;
  getJDBCMinorVersion(): number;
  getMaxBinaryLiteralLength(): number;
  getMaxCatalogNameLength(): number;
  getMaxCharLiteralLength(): number;
  getMaxColumnNameLength(): number;
  getMaxColumnsInGroupBy(): number;
  getMaxColumnsInIndex(): number;
  getMaxColumnsInOrderBy(): number;
  getMaxColumnsInSelect(): number;
  getMaxColumnsInTable(): number;
  getMaxConnections(): number;
  getMaxCursorNameLength(): number;
  getMaxIndexLength(): number;
  getMaxProcedureNameLength(): number;
  getMaxRowSize(): number;
  getMaxSchemaNameLength(): number;
  getMaxStatementLength(): number;
  getMaxStatements(): number;
  getMaxTableNameLength(): number;
  getMaxTablesInSelect(): number;
  getMaxUserNameLength(): number;
  getNumericFunctions(): string;
  getPrimaryKeys(catalog: string, schema: string, table: string): gas$JdbcResultSet;
  getProcedureColumns(catalog: string, schemaPattern: string, procedureNamePattern: string, columnNamePattern: string): string;
  getProcedureTerm(): string;
  getProcedures(catalog: string, schemaPattern: string, procedureNamePattern: string): gas$JdbcResultSet;
  getResultSetHoldability(): number;
  getRowIdLifetime(): number;
  getSQLKeywords(): string;
  getSQLStateType(): number;
  getSchemaTerm(): number;
  getSchemas(): number;
  getSchemas(catalog: string, schemaPattern: string): gas$JdbcResultSet;
  getStringFunctions(): string;
  getSuperTables(catalog: string, schemaPattern: string, tableNamePattern: string): gas$JdbcResultSet;
  getSuperTypes(catalog: string, schemaPattern: string, typeNamePattern: string): gas$JdbcResultSet;
  getSystemFunctions(): string;
  getTablePrivileges(catalog: string, schemaPattern: string, tableNamePattern: string): gas$JdbcResultSet;
  getTableTypes(): gas$JdbcResultSet;
  getTables(catalog: string, schemaPattern: string, tableNamePattern: string, types: string[]): gas$JdbcResultSet;
  getTimeDateFunctions(): string;
  getTypeInfo(): gas$JdbcResultSet;
  getUDTs(catalog: string, schemaPattern: string, typeNamePattern: string, types: number[]): gas$JdbcResultSet;
  getURL(): string;
  getUserName(): string;
  getVersionColumns(catalog: string, schema: string, table: string): gas$JdbcResultSet;
  insertsAreDetected(type: number): boolean;
  isCatalogAtStart(): boolean;
  isReadOnly(): boolean;
  locatorsUpdateCopy(): boolean;
  nullPlusNonNullIsNull(): boolean;
  nullsAreSortedAtEnd(): boolean;
  nullsAreSortedAtStart(): boolean;
  nullsAreSortedHigh(): boolean;
  nullsAreSortedLow(): boolean;
  othersDeletesAreVisible(type: number): boolean;
  othersInsertsAreVisible(type: number): boolean;
  othersUpdatesAreVisible(type: number): boolean;
  ownDeletesAreVisible(type: number): boolean;
  ownInsertsAreVisible(type: number): boolean;
  ownUpdatesAreVisible(type: number): boolean;
  storesLowerCaseIdentifiers(): boolean;
  storesLowerCaseQuotedIdentifiers(): boolean;
  storesMixedCaseIdentifiers(): boolean;
  storesMixedCaseQuotedIdentifiers(): boolean;
  storesUpperCaseIdentifiers(): boolean;
  storesUpperCaseQuotedIdentifiers(): boolean;
  supportsANSI92EntryLevelSQL(): boolean;
  supportsANSI92FullSQL(): boolean;
  supportsANSI92IntermediateSQL(): boolean;
  supportsAlterTableWithAddColumn(): boolean;
  supportsAlterTableWithDropColumn(): boolean;
  supportsBatchUpdates(): boolean;
  supportsCatalogsInDataManipulation(): boolean;
  supportsCatalogsInIndexDefinitions(): boolean;
  supportsCatalogsInPrivilegeDefinitions(): boolean;
  supportsCatalogsInProcedureCalls(): boolean;
  supportsCatalogsInTableDefinitions(): boolean;
  supportsColumnAliasing(): boolean;
  supportsConvert(): boolean;
  supportsConvert(fromType: number, toType: number): boolean;
  supportsCoreSQLGrammar(): boolean;
  supportsCorrelatedSubqueries(): boolean;
  supportsDataDefinitionAndDataManipulationTransactions(): boolean;
  supportsDataManipulationTransactionsOnly(): boolean;
  supportsDifferentTableCorrelationNames(): boolean;
  supportsExpressionsInOrderBy(): boolean;
  supportsExtendedSQLGrammar(): boolean;
  supportsFullOuterJoins(): boolean;
  supportsGetGeneratedKeys(): boolean;
  supportsGroupBy(): boolean;
  supportsGroupByBeyondSelect(): boolean;
  supportsGroupByUnrelated(): boolean;
  supportsIntegrityEnhancementFacility(): boolean;
  supportsLikeEscapeClause(): boolean;
  supportsLimitedOuterJoins(): boolean;
  supportsMinimumSQLGrammar(): boolean;
  supportsMixedCaseIdentifiers(): boolean;
  supportsMixedCaseQuotedIdentifiers(): boolean;
  supportsMultipleOpenResults(): boolean;
  supportsMultipleResultSets(): boolean;
  supportsMultipleTransactions(): boolean;
  supportsNamedParameters(): boolean;
  supportsNonNullableColumns(): boolean;
  supportsOpenCursorsAcrossCommit(): boolean;
  supportsOpenCursorsAcrossRollback(): boolean;
  supportsOpenStatementsAcrossCommit(): boolean;
  supportsOpenStatementsAcrossRollback(): boolean;
  supportsOrderByUnrelated(): boolean;
  supportsOuterJoins(): boolean;
  supportsPositionedDelete(): boolean;
  supportsPositionedUpdate(): boolean;
  supportsResultSetConcurrency(type: number, concurrency: number): boolean;
  supportsResultSetHoldability(holdability: number): boolean;
  supportsResultSetType(type: number): boolean;
  supportsSavepoints(): boolean;
  supportsSchemasInDataManipulation(): boolean;
  supportsSchemasInIndexDefinitions(): boolean;
  supportsSchemasInPrivilegeDefinitions(): boolean;
  supportsSchemasInProcedureCalls(): boolean;
  supportsSchemasInTableDefinitions(): boolean;
  supportsSelectForUpdate(): boolean;
  supportsStatementPooling(): boolean;
  supportsStoredFunctionsUsingCallSyntax(): boolean;
  supportsStoredProcedures(): boolean;
  supportsSubqueriesInComparisons(): boolean;
  supportsSubqueriesInExists(): boolean;
  supportsSubqueriesInIns(): boolean;
  supportsSubqueriesInQuantifieds(): boolean;
  supportsTableCorrelationNames(): boolean;
  supportsTransactionIsolationLevel(level: number): boolean;
  supportsTransactions(): boolean;
  supportsUnion(): boolean;
  supportsUnionAll(): boolean;
  updatesAreDetected(type: number): boolean;
  usesLocalFilePerTable(): boolean;
  usesLocalFiles(): boolean;
}
