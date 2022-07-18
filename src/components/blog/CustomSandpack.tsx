import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "@mui/material";

type CustomSandpackProps = {
    template: any;
    filename: string;
    children: string;
};
const CustomSandpack = (props: CustomSandpackProps) => {
    const theme = useTheme();
    const { children, filename } = props;
    return (
        <Sandpack
            template="react-ts"
            theme={theme.palette.mode}
            files={{
               [filename]: { code: children, active: true },
            }}
            options={{
                showLineNumbers: true,
                showInlineErrors: true,
                showTabs: false,
                closableTabs: false,
            }}
        />
    );
};

export default CustomSandpack;
