# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from Products.CMFCore.utils import getToolByName
from tvproject.core.testing import TVPROJECT_core_INTEGRATION_TESTING  # noqa
from plone import api

import unittest

try:
    from Products.CMFPlone.utils import get_installer
except ImportError:
    get_installer = None


class TestSetup(unittest.TestCase):
    """Test that tvproject.core is properly installed."""

    layer = TVPROJECT_core_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        if get_installer:
            self.installer = get_installer(self.portal, self.layer["request"])
        else:
            self.installer = api.portal.get_tool("portal_quickinstaller")

    def test_product_installed(self):
        """Test if tvproject.core is installed."""
        self.assertTrue(self.installer.isProductInstalled("tvproject.core"))

    # def test_plone_restapi_installed(self):
    #     self.assertTrue(
    #         self.installer.isProductInstalled(
    #             "plone.restapi"
    #         )
    #     )

    def test_browserlayer(self):
        """Test that ITvprojectcoreLayer is registered."""  # noqa
        from tvproject.core.interfaces import (ITvprojectcoreLayer)
        from plone.browserlayer import utils
        self.assertIn(ITvprojectcoreLayer, utils.registered_layers())  # noqa


class TestUninstall(unittest.TestCase):

    layer = TVPROJECT_core_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer["portal"]
        if get_installer:
            self.installer = get_installer(self.portal, self.layer["request"])
        else:
            self.installer = api.portal.get_tool("portal_quickinstaller")

        self.installer.uninstallProducts(["tvproject.core"])  # noqa

    def test_product_uninstalled(self):
        """Test if tvproject.core is cleanly uninstalled."""  # noqa
        self.assertFalse(self.installer.isProductInstalled(
            "tvproject.core"))

    def test_browserlayer_removed(self):
        """Test that ITvprojectcoreLayer is removed."""  # noqa
        from tvproject.core.interfaces import ITvprojectcoreLayer  # noqa
        from plone.browserlayer import utils
        self.assertNotIn(ITvprojectcoreLayer, utils.registered_layers()) # noqa
