import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getUnnamedAccounts } = hre
  const { deploy } = deployments
  const [ deployer ] = await getUnnamedAccounts()

  const bitriel = await deployments.get("BitrielToken")
  const timelock = await deployments.get("TimeLock")

  await deploy('BitrielGovernance', {
    from: deployer,
    args: [
      bitriel.address,
      timelock.address
    ],
    log: true,
    deterministicDeployment: false
  })
}

deploy.tags = ['BitrielGovernance']
deploy.dependencies = ['BitrielToken', 'TimeLock']
export default deploy