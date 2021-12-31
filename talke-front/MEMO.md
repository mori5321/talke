# workspaceでのコマンド実行
npm run dev --workspace(-w) app

# 全workspaceでの同一コマンド実行
npm run dev --workspaces

# Storybookについて
現状 npm audit fix --forceしてしまうと、storybookのversionが下がり起動しなくなるため注意
