import type { UploadToken } from '.';
import type { GenerateStyle } from '../../theme';

const genDraggerStyle: GenerateStyle<UploadToken> = token => {
  const { componentCls, iconCls } = token;

  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-drag`]: {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        background: token.colorBgContainerSecondary,
        border: `${token.controlLineWidth}px dashed ${token.colorBorder}`,
        borderRadius: token.radiusBase,
        cursor: 'pointer',
        transition: `border-color ${token.motionDurationSlow}`,

        [componentCls]: {
          padding: `${token.padding}px 0`,
        },

        [`${componentCls}-btn`]: {
          display: 'table',
          width: '100%',
          height: '100%',
          outline: 'none',
        },

        [`${componentCls}-drag-container`]: {
          display: 'table-cell',
          verticalAlign: 'middle',
        },

        [`&:not(${componentCls}-disabled):hover`]: {
          borderColor: token.colorPrimaryHover,
        },

        [`p${componentCls}-drag-icon`]: {
          marginBottom: token.margin,

          [iconCls]: {
            color: token.colorPrimary,
            fontSize: token.uploadThumbnailSize,
          },
        },

        [`p${componentCls}-text`]: {
          margin: `0 0 ${token.marginXXS}px`,
          color: token.colorTextHeading,
          fontSize: token.fontSizeLG,
        },

        [`p${componentCls}-hint`]: {
          color: token.colorTextSecondary,
          fontSize: token.fontSizeBase,
        },

        // ===================== Disabled =====================
        [`&${componentCls}-disabled`]: {
          cursor: 'not-allowed',

          [`p${componentCls}-drag-icon ${iconCls},
            p${componentCls}-text,
            p${componentCls}-hint
          `]: {
            color: token.colorTextDisabled,
          },
        },
      },
    },
  };
};

export default genDraggerStyle;
