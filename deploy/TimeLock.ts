import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getUnnamedAccounts } = hre
  const { deploy } = deployments
  const [ deployer ] = await getUnnamedAccounts()

  await deploy('TimeLock', {
    from: deployer,
    args: [
      172800, // 2 days
      [], // proposers
      [], // executors
    ],
    log: true,
    deterministicDeployment: false
  })
}

deploy.tags = ['TimeLock']
export default deploy