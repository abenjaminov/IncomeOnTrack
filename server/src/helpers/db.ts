import { nanoid } from 'nanoid';
import { FlatRecord, Schema, SchemaDefinition, SchemaDefinitionType, SchemaOptions, Types, DefaultTypeKey, ObtainDocumentType } from 'mongoose';

export const CommonSchemaOptions: SchemaOptions = {
  timestamps: { createdAt: 'creationDate', updatedAt: 'modifiedDate' },
  id: false,
};

type EnforcedDocType = undefined;
type TInstanceMethods = any;
type TQueryHelpers = any;
type TStaticMethods = any;
type TypeKeyBaseType = DefaultTypeKey;
type TPathTypeKey = TypeKeyBaseType;
type DocType = ObtainDocumentType<any, EnforcedDocType, TPathTypeKey>;

export const IOTSchema = (
  definitions: SchemaDefinition<SchemaDefinitionType<EnforcedDocType>> | DocType,
  options?: SchemaOptions<TPathTypeKey, FlatRecord<DocType>, TInstanceMethods, TQueryHelpers, TStaticMethods>,
) => {
  const BaseSchema: Schema = new Schema(
    {
      id: { type: Schema.Types.String, required: true, unique: true, index: true, default: () => nanoid() },
      _id: { type: Types.ObjectId, required: true, default: () => new Types.ObjectId() },
    },
    { ...CommonSchemaOptions, ...options },
  );

  BaseSchema.add(definitions);

  return BaseSchema;
};
