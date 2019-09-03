# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

from unittest import TestCase

from tests.utils import assert_equal_dict

from polyaxon_schemas.ops.experiment.environment import (
    HorovodClusterConfig,
    HorovodConfig,
    MPIClusterConfig,
    MXNetClusterConfig,
    MXNetConfig,
    PytorchClusterConfig,
    PytorchConfig,
    TensorflowClusterConfig,
    TensorflowConfig,
)


class TestExperimentEnvironmentsConfigs(TestCase):
    def test_tensorflow_cluster_config(self):
        config_dict = {
            "worker": [
                "worker0.example.com:2222",
                "worker1.example.com:2222",
                "worker2.example.com:2222",
            ],
            "ps": ["ps0.example.com:2222", "ps1.example.com:2222"],
        }
        config = TensorflowClusterConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_horovod_cluster_config(self):
        config_dict = {
            "worker": [
                "worker0.example.com:2222",
                "worker1.example.com:2222",
                "worker2.example.com:2222",
            ]
        }
        config = HorovodClusterConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_mpi_cluster_config(self):
        config_dict = {
            "worker": [
                "worker0.example.com:2222",
                "worker1.example.com:2222",
                "worker2.example.com:2222",
            ]
        }
        config = MPIClusterConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_pytorch_cluster_config(self):
        config_dict = {
            "worker": [
                "worker0.example.com:2222",
                "worker1.example.com:2222",
                "worker2.example.com:2222",
            ]
        }
        config = PytorchClusterConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_mxnet_cluster_config(self):
        config_dict = {
            "worker": [
                "worker0.example.com:2222",
                "worker1.example.com:2222",
                "worker2.example.com:2222",
            ],
            "server": ["server0.example.com:2222", "server1.example.com:2222"],
        }
        config = MXNetClusterConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_tensorflow_config(self):
        config_dict = {"n_workers": 10, "n_ps": 5}
        config = TensorflowConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add default worker resources
        config_dict["default_worker"] = {
            "resources": {
                "requests": {"cpu": 0.5, "gpu": 2, "tpu": 2},
                "limits": {"cpu": 1, "gpu": 4, "tpu": 8},
            }
        }
        config = TensorflowConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

        # Add default ps resources
        config_dict["default_ps"] = {
            "resources": {
                "requests": {"cpu": 0.5, "memory": "256Mi"},
                "limits": {"cpu": 1, "memory": "400Mi"},
            }
        }
        config = TensorflowConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

        # Adding custom resources for worker 4
        config_dict["worker"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = TensorflowConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

        # Adding custom resources for ps 4
        config_dict["ps"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = TensorflowConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

    def test_horovod_config(self):
        config_dict = {"n_workers": 10}
        config = HorovodConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

        # Add default worker resources
        config_dict["default_worker"] = {
            "resources": {
                "requests": {"cpu": 0.5, "gpu": 2, "tpu": 2},
                "limits": {"cpu": 1, "gpu": 4, "tpu": 8},
            }
        }
        config = HorovodConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Adding custom resources for worker 4
        config_dict["worker"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = HorovodConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_light_dict())

    def test_pytorch_config(self):
        config_dict = {"n_workers": 10}
        config = PytorchConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add default worker resources
        config_dict["default_worker"] = {
            "resources": {
                "requests": {"cpu": 0.5, "gpu": 2, "tpu": 1},
                "limits": {"cpu": 1, "gpu": 4, "tpu": 1},
            }
        }
        config = PytorchConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Adding custom resources for worker 4
        config_dict["worker"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = PytorchConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

    def test_mxnet_config(self):
        config_dict = {"n_workers": 10, "n_ps": 5}
        config = MXNetConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add default worker resources
        config_dict["default_worker"] = {
            "resources": {
                "requests": {"cpu": 0.5, "gpu": 2, "tpu": 1},
                "limits": {"cpu": 1, "gpu": 4, "tpu": 1},
            }
        }
        config = MXNetConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Add default ps resources
        config_dict["default_ps"] = {
            "resources": {
                "requests": {"cpu": 0.5, "memory": "256Mi"},
                "limits": {"cpu": 1, "memory": "400Mi"},
            }
        }
        config = MXNetConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Adding custom resources for worker 4
        config_dict["worker"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = MXNetConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())

        # Adding custom resources for ps 4
        config_dict["ps"] = [
            {
                "index": 4,
                "resources": {
                    "requests": {"cpu": 0.5, "memory": "256Mi"},
                    "limits": {"cpu": 1, "memory": "400Mi"},
                },
            }
        ]
        config = MXNetConfig.from_dict(config_dict)
        assert_equal_dict(config_dict, config.to_dict())
