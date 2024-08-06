// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: N2XFsVyv799E

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicAppType.module.css"; // plasmic-import: N2XFsVyv799E/css

createPlasmicElementProxy;

export type PlasmicAppType__VariantMembers = {
  selected: "selected";
};
export type PlasmicAppType__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicAppType__VariantsArgs;
export const PlasmicAppType__VariantProps = new Array<VariantPropType>(
  "selected"
);

export type PlasmicAppType__ArgsType = {
  name?: string;
  caption?: string;
  onClick?: () => void;
};
type ArgPropType = keyof PlasmicAppType__ArgsType;
export const PlasmicAppType__ArgProps = new Array<ArgPropType>(
  "name",
  "caption",
  "onClick"
);

export type PlasmicAppType__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultAppTypeProps {
  name?: string;
  caption?: string;
  onClick?: () => void;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppType__RenderFunc(props: {
  variants: PlasmicAppType__VariantsArgs;
  args: PlasmicAppType__ArgsType;
  overrides: PlasmicAppType__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootselected]: hasVariant($state, "selected", "selected") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runOnClick"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onClick"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnClick"] != null &&
          typeof $steps["runOnClick"] === "object" &&
          typeof $steps["runOnClick"].then === "function"
        ) {
          $steps["runOnClick"] = await $steps["runOnClick"];
        }
      }}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pbQ10)}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__nHxMy, {
            [sty.freeBoxselected__nHxMYl8Tv]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__eEfPe
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "\u0647\u0645\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kEbLd
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.caption;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "\u0627\u064e\u0628\u0632\u0627\u0631\u06a9 \u0647\u0627 \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f.";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppType__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppType__VariantsArgs;
    args?: PlasmicAppType__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppType__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppType__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAppType__ArgProps,
          internalVariantPropNames: PlasmicAppType__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppType__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppType";
  } else {
    func.displayName = `PlasmicAppType.${nodeName}`;
  }
  return func;
}

export const PlasmicAppType = Object.assign(
  // Top-level PlasmicAppType renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAppType
    internalVariantProps: PlasmicAppType__VariantProps,
    internalArgProps: PlasmicAppType__ArgProps
  }
);

export default PlasmicAppType;
/* prettier-ignore-end */
